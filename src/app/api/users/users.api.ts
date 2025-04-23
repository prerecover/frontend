import { getClient } from "@/lib/apollo-client";
import { GETME_QUERY } from "./users.gql";
import { useUserStore } from "@/shared/store/userStore";

class UsersApi {
    public async findMe() {
        const { data } = await getClient().query({ query: GETME_QUERY });             
        return data.getMe
    }
}

export default new UsersApi()