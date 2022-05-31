const chai = require("chai");
const chaiHttp = require("chai-http");
const index = require("../index");

chai.use(chaiHttp);

describe("teste", () => {
  it("test api GET", () => {
    chai
      .request(index.app)
      .get("/get")
      .end((err, res) => {
        chai.expect(err).to.be.null; // Testando se os erros são nulos.
        chai.expect(res).to.be.json; //Testando se a resposta veio em formato json.
        chai.expect(res).to.have.status(200); //Testando status de sucesso da requisição.
      });
  });
  it("test api POST", () => {
    chai
      .request(index.app)
      .post("/add")
      .send({ product: "test", quantity: "test", price: "test" })
      .end((err, res) => {
        chai.expect(err).to.be.null; //Testando se os erros são nulos.
        chai.expect(res).to.have.status(201); //Testando status de sucesso da requisição.
      });
  });
  it("test api PUT", () => {
    chai
      .request(index.app)
      .put("/edit/1")
      .send({ product: "test", quantity: "test", price: "test" })
      .end((err, res) => {
        chai.expect(err).to.be.null; //Testando se os erros são nulos.
        chai.expect(res).to.have.status(200); //Testando status de sucesso da requisição.
      });
  });
  it("test api DELETE", () => {
    chai
      .request(index.app)
      .delete("/delete/1")
      .end((err, res) => {
        chai.expect(err).to.be.null; //Testando se os erros são nulos.
        chai.expect(res).to.have.status(200); //Testando status de sucesso da requisição.
      });
  });
});
