import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const login = (props) => {
  return (
    <div>
      <div class="container">
        <Form id="">
          <FormGroup>
            <h3> Login </h3>
            <p>
              Voce não tem uma conta ainda? Create sua conta aqui em poucos minutos
            </p>
            <Label for="exampleEmail" >Email</Label>
            <Input type="email" name="email" id="Email" placeholder="email@gmail.com" />
          </FormGroup>
          <br></br>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="sua senha aqui" />
          </FormGroup>
          <label>Lembre minha senha
            <input type="checkbox"></input>
          </label>
          <p>esqueci minha senha</p>
          <Button>Submit</Button>
        </Form>
      </div>
      <div>
          <h2>Bem vindo ao Guru Sports</h2>
          <p>tenha os melhores palpites de placar sporte é informativos sobre as rodadas.</p>
          <p>faça login com</p>
          <a href="#">
          <i class="fa fa-facebook fa-fw"></i> Login com Facebook
         </a>
         <br></br>
         <a href="#" >
            <i></i> Login com conta google
         </a>
      </div>
    </div>
  );
}

export default login;