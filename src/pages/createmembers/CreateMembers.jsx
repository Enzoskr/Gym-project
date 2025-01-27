import React from "react";
import {
  CreateMembersdiv,
  CreateMembersForm,
  Inputform,
  TitleForm,
  Logo,
} from "./CreateMembersStyles";
import { Link } from "react-router-dom";
import LogoGym from "../../assets/assetsNavbar/LogoGym.webp";
import Button from "../../components/UI/Buttons/Buttons";

const CreateMembers = () => {
  return (
    <CreateMembersdiv>
      <CreateMembersForm>
        <Link to="/">
          <Logo src={LogoGym} alt="logo" />
        </Link>
        <TitleForm>Crear nuevo miembro</TitleForm>
        <Inputform placeholder="Ingrese el nombre de usuario" />
        <Inputform placeholder="Ingrese el apellido de usuario" />
        <Inputform placeholder="Ingrese el plan del usuario" />
        <Button>Crear miembro</Button>
      </CreateMembersForm>
    </CreateMembersdiv>
  );
};

export default CreateMembers;
