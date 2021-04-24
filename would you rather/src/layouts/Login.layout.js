import React from 'react'
import { Button, Form, Grid, Header, Image, Segment, Select } from 'semantic-ui-react'


const options = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'articles', text: 'Articles', value: 'articles' },
  { key: 'products', text: 'Products', value: 'products' },
]

const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='../assets/udacity-logo.png' /> Log-in to your account
      </Header>
      <Form size='large'>   
          <Form.Field>
            <Select size='large' options={options} defaultValue='articles' />
            </Form.Field>
            <Button color='teal' fluid size='large'>
            Login
          </Button>        
      </Form>     
    </Grid.Column>
  </Grid>
)

export default LoginForm