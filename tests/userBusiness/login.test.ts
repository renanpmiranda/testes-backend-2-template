import { HashManagerMock } from './../mocks/HashManagerMock';
import { TokenManagerMock } from './../mocks/TokenManagerMock';
import { IdGeneratorMock } from './../mocks/IdGeneratorMock';
import { UserDatabaseMock } from './../mocks/UserDatabaseMock';
import { UserBusiness } from './../../src/business/UserBusiness';

describe("login", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("deve receber um email e uma senha de um usuário NORMAL e retornar um token", async () => {
        const input = {
            email: "normal@email.com",
            password: "bananinha"
        }
        
        const response = await userBusiness.login(input)

        const token = "token-mock-normal"

        expect(response.token).toBe(token)

    })

    test("deve receber um email e uma senha de um usuário ADMIN e retornar um token", async () => {
        const input = {
            email: "admin@email.com",
            password: "bananinha"
        }
        
        const response = await userBusiness.login(input)

        const token = "token-mock-admin"

        expect(response.token).toBe(token)

    })
}) 