import { implement } from '@orpc/server';
import usersContact from 'src/controllers/rest/users.contact';

const implementor = implement(usersContact);

export default implementor
	/**
	 * register domain-specific middleware and context here
	 */
	// .use()
	.router({
		getUsers: implementor.getUsers
			/**
			 * register path specific middleware here
			 */
			// .use()
			.handler(async (c) => {
				return {
					body: {
						data: [
							{
								id: '1',
								name: 'John Doe',
								email: '',
							},
						],
					},
				};
			}),
		uploadUserAvatar: implementor.uploadUserAvatar.handler(async (_) => {
			return {
				message: 'success',
			};
		}),
	});
