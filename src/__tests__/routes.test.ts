import app from "../server";
import supertest from "supertest";
import * as user from '../handlers/user'


describe("GET /", () => {
    it("should return hello", async () => {
        const response = await supertest(app).get("/");
        expect(response.body.message).toBe("hello");
    })
})

describe("POST /user", function () {
    it("should create a new user", async () => {
        const req = { body: { username: "hello", password: "hola" } }

        const res = {
            json({ token }) {
                expect(token).toBeTruthy()
            }
        }
        await user.createUser(req, res, () => { })
    });
});

describe("POST /user", function () {
    it("responds with json", async () => {
        const res = await supertest(app)
            .post("/user")
            .send({ username: "hello", password: "hola" })
            .set("Accept", "application/json")

        expect(res.headers["Content-Type"]).toMatch(/json/);
        expect(res.status).toEqual(200);
    });
});