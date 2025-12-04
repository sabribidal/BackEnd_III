import chai from "chai";
import chaiHttp from "chai-http";
import app from "../src/app.js";

const { expect } = chai;
chai.use(chaiHttp);

describe("Adoption API - Tests funcionales", () => {

let createdId;

it("GET /api/adoptions - debe devolver un array", (done) => {
    chai.request(app)
    .get("/api/adoptions")
    .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
    });
});

it("POST /api/adoptions - debe crear una adopción", (done) => {
    const newAdoption = { petName: "Firulais", adopterName: "Sabrina", date: "2025-10-15" };
    chai.request(app)
    .post("/api/adoptions")
    .send(newAdoption)
    .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property("_id");
        createdId = res.body._id;
        done();
    });
  });

  it("GET /api/adoptions/:id - debe devolver la adopción creada", (done) => {
    chai.request(app)
      .get(`/api/adoptions/${createdId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property("_id", createdId);
        done();
      });
  });

  it("PUT /api/adoptions/:id - debe actualizar la adopción", (done) => {
    chai.request(app)
      .put(`/api/adoptions/${createdId}`)
      .send({ adopterName: "María" })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property("adopterName", "María");
        done();
      });
  });

  it("DELETE /api/adoptions/:id - debe eliminar la adopción", (done) => {
    chai.request(app)
      .delete(`/api/adoptions/${createdId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it("GET /api/adoptions/:id - ID inválido debe devolver 404", (done) => {
    chai.request(app)
      .get("/api/adoptions/123456789012345678901234")
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

});
