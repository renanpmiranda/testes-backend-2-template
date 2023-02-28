import { USER_ROLES } from './../../src/types';
import { HashManagerMock } from './../mocks/HashManagerMock';
import { TokenManagerMock } from './../mocks/TokenManagerMock';
import { IdGeneratorMock } from './../mocks/IdGeneratorMock';
import { UserBusiness } from './../../src/business/UserBusiness';
import { UserDatabaseMock } from './../mocks/UserDatabaseMock';

describe("getAll", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )
    test("deve retornar uma lista de usuários", async () => {
        const userDB = await userBusiness.getAll()

        expect(userDB).toHaveLength(2)
        expect(userDB).toContainEqual(
            {
                id: "id-mock",
                name: "Normal Mock",
                email: "normal@email.com",
                password: "hash-bananinha",                
                createdAt: expect.any(String),
                role: USER_ROLES.NORMAL,
            }
        )
        expect(userDB).toContainEqual(
            {
                id: "id-mock",
                name: "Admin Mock",
                email: "admin@email.com",
                password: "hash-bananinha",
                role: USER_ROLES.ADMIN,
                createdAt: expect.any(String)
            }
        )
    })
})