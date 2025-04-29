import { getClient } from '@/lib/apollo-client';
import { GETME_QUERY } from './users.gql';

class UsersApi {
  public async findMe() {
    const { data } = await getClient().query({ query: GETME_QUERY });
    return data.getMe;
  }
}
const usersApi = new UsersApi();
export default usersApi;
