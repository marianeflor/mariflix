import React from "react"
import { Link } from "react-router-dom"
import PageDefault from "../../components/PageDefault"

import errorNumber from "../../assets/img/404.png"
import pageNotFound from "../../assets/img/paginanaoencontrada.png"

import { ButtonHome, ErrorImage, Text} from "./styles"

const Page404 = () => {
  return (
    <PageDefault>
        <ErrorImage src={errorNumber} alt="404"/>
        <ErrorImage src={pageNotFound} alt="Página não encontrada"/>

        <Text>Essa não era a página que você procurava?</Text>

        <Text>O endereço acima pode estar errado ou talvez a página tenha sido retirada do ar!</Text>

        <ButtonHome as={Link} to="/">Home</ButtonHome>
    </PageDefault>
  )
}

export default Page404
