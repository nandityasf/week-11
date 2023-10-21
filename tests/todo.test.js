const {app, server} = require('../app')
const request = require('supertest')

describe("API /todos", () => {

    it("GET /todos", (done) => {
        request(app)
        .get("/todos")
        .expect(200)
        .then(response => {
            const firstData = response.body[0]
            expect(firstData.title).toBe("Pohon")
            done()
        })
        .catch(done)
    })

    it("GET /todos/:id", (done) => {
        request(app)
        .get("/todos/3")
        .expect(200)
        .then(response => {
            const data = response.body
            expect(data.title).toBe("Ranting")
            done()
        })
        .catch(done)
    })

    it("POST /todos", (done) => {
        request(app)
        .post("/todos")
        .send({
            title: "Laptop",
            status: "active"
        })
        .expect(200)
        .then(response => {
            const data = response.body
            expect(data.title).toBe("Laptop")
            expect(data.status).toBe("active")
            done()
        })
        .catch(done)
    })

    it("PUT /todos/:id", (done) => {
        request(app)
        .put("/todos/:10")
        .send({
            title: "Kabel",
            // status: "active"
        })
        .expect(200)
        .then(response => {
            const data = response.body
            expect(data.title).toBe("Kabel")
            // expect(data.status).toBe("active")
            done()
        })
        .catch(done)
    })

    it("soft delete", (done)=>{
        request(app)
        .delete("/todos/:11")
       .expect(200)
        .then(response => {
            const data = response.body
            expect(data.message).toBe("deleted")
            
            done()
        })
        .catch(done)
    })
})

afterAll(done => {
    server.close()
    done()
})