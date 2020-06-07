import React from 'react';
import  {Feather, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

import {
    Container, 
    Header, 
    Title, 
    Title1, 
    Title2, 
    T1, 
    Card, 
    CardHeader, 
    Avatar, 
    Description, 
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel,
} from './styles';

import avatar from '../../images/avatar.png';

export default function Activities(){
    return (
        <Container>
            <Header>
                <Title>
                    <Title1>
                        <T1>Atividades</T1>
                    </Title1>
                    <Title2>
                        <T1>Todos</T1>
                        <T1>Minhas</T1>
                    </Title2>
                </Title>
            </Header>

            <Card>
                <CardHeader>

                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@matheussilva</Bold>
                    </Description>

                </CardHeader>
                <CardBody>
                    <UserName>André Toni Foguel</UserName>
                </CardBody>
                <CardFooter>
                    <Details>
                        <Value>R$ 18,00</Value>
                        <Divider />
                        
                        <Feather name="lock" color="#fff" size={14}/>
                        <Date>Há 2 anos</Date>

                        
                    </Details>
                    <Actions>
                            <Option>
                                
                                <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
                                <OptionLabel>0</OptionLabel>
                            </Option>
                            <Option>
                                <AntDesign name="hearto" size={14} color="#fff" />
                                <OptionLabel>0</OptionLabel>
                            </Option>
                        </Actions>
                </CardFooter>
                
            </Card>
        </Container>
    );
}