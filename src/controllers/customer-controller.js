const Customer = require('../app/models/customer');

exports.post = function (req, res){
  const customer = new Customer();
  customer.name = req.body.nome;
  customer.email = req.body.email;
  customer.password = req.body.senha;

  customer.save(function(error){
      if(error)
          res.status(500).send({
            message: "Error ao tentar salvar um novo cliente " + error
        });
      
      res.status(201).json({message: 'cliente inserido com sucesso'});
  });
};

exports.getAll = async (req, res) => {
  try {

    const customers = await Customer.find();

    return res.status(200).send({ customers });
  }
  catch {
    return res.status(500).send({ error: 'Erro ao carregar os clientes' });
  }

};

exports.getById = async (req, res) => {
  try {

    const customer = await Customer.findById(req.params.customerId);

    return res.status(200).send({ customer });
  }
  catch {
    return res.status(500).send({ error: 'Erro ao carregar os clientes' });
  }

};