import React, { useState } from 'react';

import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

import { Switch } from 'react-native';

import creditCard from '../../images/credit-card.png';

import { 
    Wrapper,
    Container, 
    Header, 
    HeaderContainer, 
    Title,
    Balance, 
    Value, 
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UseBalanceTitle, 
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardBody,
    CardDetails,
    CardTiltle,
    CardInfo, 
    Img,
    AddButton,
    AddLabel,
    UseTicketButton,
    UseTicketLabel,
    UseTicketContainer
} from './styles';


export default function Wallet(){
    const [isVisible, setIsVisible] = useState(true);
    const [useBalance, setUseBalance] = useState(true);

    function handleToggleVisibility() {
        setIsVisible(( prevState ) => !prevState);
    }

    function handleToggleUseBalance() {
        setUseBalance(( prevState ) => !prevState);
    }

    return(
        <Wrapper>
            <Container>
                <Header 
                    colors={
                        useBalance
                        ? ['#52E78C', '#1AB563']
                        : ['#d3d3d3', '#868686']
                    }
                >
                    <HeaderContainer>
                        <Title>Saldo PicPay</Title>

                        <Balance>
                            <Value>
                                R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
                            </Value>
                            <EyeButton onPress= {handleToggleVisibility}>
                                <Feather name={isVisible ? "eye" : 'eye-off'} size={28} color="#fff" />
                            </EyeButton>
                        </Balance>
                        <Info>
                            Seu saldo está rendendo 100% do CDI 
                        </Info>
                        <Actions>
                            <Action>
                                <MaterialCommunityIcons name="cash" size={28} color="#fff"/>
                                <ActionLabel>Adicionar</ActionLabel>
                            </Action>
                            <Action>
                                <FontAwesome name="bank" size={28} color="#fff"/>
                                <ActionLabel>Retirar</ActionLabel>
                            </Action>
                        </Actions>
                    </HeaderContainer>
                </Header>

                <UseBalance>
                    <UseBalanceTitle>
                    Usar saldo ao pagar
                    </UseBalanceTitle>

                    <Switch
                        trackColor={{true: '#52E78C', false: '#d3d3d3'}}
                        value={useBalance}
                        onValueChange={handleToggleUseBalance}
                    />

                </UseBalance>
                <PaymentMethods>
                    <PaymentMethodsTitle>
                        Formas de pagamento
                    </PaymentMethodsTitle>
                    <Card>
                        <CardBody>
                            <CardDetails>
                                <CardTiltle>
                                    Cadastre seu cartão de crédito
                                </CardTiltle>
                                <CardInfo>
                                    Cadastr seu cartão de crédito para poder fazer pagamentosmesmo quando nao tiver saldo no seu PicPay
                                </CardInfo>
                                
                            </CardDetails>
                            <Img source={creditCard} resizeMode="contain"/>
                        </CardBody>
                        <AddButton>
                            <AntDesign name="pluscircleo" size={30} color="#0DB060"/>
                            <AddLabel>
                                Adicionar cartão de crédito
                            </AddLabel>
                        </AddButton>
                    </Card>


                <UseTicketContainer>
                        <UseTicketButton>
                            <MaterialCommunityIcons name="ticket-outline" size={20} color="#0DB060"/>
                            <UseTicketLabel>
                                Usar código promocional
                            </UseTicketLabel>
                        </UseTicketButton>
                    </UseTicketContainer>
                </PaymentMethods>
            </Container>
        </Wrapper>
    );
}