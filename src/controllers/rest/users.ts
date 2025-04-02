import { implement } from '@orpc/server';
import usersContact from 'src/controllers/rest/users.contact';

const os = implement(usersContact);

export default os.router({
	getUsers: os.getUsers.handler(async (c) => {
		return {
			data: [
				{
					id: '1',
					name: 'John Doe',
					email: '',
				},
			],
		};
	}),
	uploadUserAvatar: os.uploadUserAvatar.handler(async (_c) => {
		return {
			message: 'success',
		};
	}),
});
