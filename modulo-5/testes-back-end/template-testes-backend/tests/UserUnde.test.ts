import { UserBusiness } from "../src/business/UserBusiness"
import { User } from "../src/model/User"
import { HashGeneratorMock } from "./mocks/hashGeneratorMocks"
import { idGeneratorMocks } from "./mocks/idGeneratorMocks"
import { TokenGeneratorMock } from "./mocks/tokenGeneratorMocks"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"


const userBusinessMock = new UserBusiness(
    new idGeneratorMocks() as any,
    new HashGeneratorMock()as any,
    new UserDatabaseMock() as any,
    new TokenGeneratorMock()
)


describe("getUserById", () => {
	// (a)
   test("teste get", async () => {
    expect.assertions(2)


    try {
      await await userBusinessMock.getUserId("user1")
    } catch (error) {
      expect(error.statusCode).toBe(404)
      expect(error.message).toBe("User not found")
    }
  })})


  test("teste user", async () => {
    expect.assertions(2)
    
    try {
      const getUserById = jest.fn(
        (id: string) => userBusinessMock.getUserById(id)
      )
        
      const result = await getUserById("id_mock_admin")

      expect(getUserById).toHaveBeenCalledWith("id_mock_admin")
      expect(result).toEqual({
        id: "id_mock_admin",
        name: "astrodev",
        email: "astrodev@gmail.com",
        role: "ADMIN",
      })
    } catch (error) {
      console.log(error.message)
    }
  })
})