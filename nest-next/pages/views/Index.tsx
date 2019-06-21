import React from 'react';
import Head from 'next/head';
import { Dropdown, Header, Icon, Menu, Input } from 'semantic-ui-react'

interface InitialProps {
	query: string;
}

interface Props extends InitialProps { }

class Index extends React.Component<Props> {
	public static getInitialProps({ query }: InitialProps) {
		return { query };
	}

	public render() {
		return (
			<div>
				<Head>
					<link
						rel="stylesheet"
						href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
					/>
					<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
					<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
				</Head>
				<Header as='h3' block>
					<div>
						ChurchCRM
						<Header icon='sidebar' size='tiny' floated='right' />
					</div>
				</Header>
				<Header as='h3'>
					<Menu vertical>
						<Menu.Item>
							<Input placeholder='Search...' />
						</Menu.Item>

						<Menu.Item>
							{this.props.query}
							<Menu.Menu>
								<Menu.Item name='search' >
									Search
								</Menu.Item>
								<Menu.Item name='add' >
									Add
								</Menu.Item>
								<Menu.Item name='about' >
									Remove
								</Menu.Item>
							</Menu.Menu>
						</Menu.Item>

						<Menu.Item name='browse' >
							<Icon name='grid layout' />
							Browse
						</Menu.Item>
						<Menu.Item
							name='messages'
						>
							Messages
						</Menu.Item>

						<Dropdown item text='More'>
							<Dropdown.Menu>
								<Dropdown.Item icon='edit' text='Edit Profile' />
								<Dropdown.Item icon='globe' text='Choose Language' />
								<Dropdown.Item icon='settings' text='Account Settings' />
							</Dropdown.Menu>
						</Dropdown>
					</Menu>
				</Header>
			</div>
		);
	}
}

export default Index;
