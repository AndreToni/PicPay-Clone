import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: 25px;
    padding: 0 16px;
`;

export const Header = styled.View`
`;

export const Title = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title1 = styled.View`
    align-items: flex-start;
    
`;

export const Title2 = styled.View`
    align-items: flex-end;
    flex-direction: row;
`;

export const T1 = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 5px;
`;




export const  Card = styled.View`
    background: #1e222b;
    border-radius: 8px;
    margin-top: 20px;
    padding: 15px;
`;
export const  CardHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const  Avatar = styled.Image``;
export const  Description = styled.Text`
    color: #fff;
    font-size: 16px;
    margin-left: 15px;
`;
export const  Bold = styled.Text`
    font-weight: bold;
`;

export const CardBody = styled.View`
    margin-top: 20px;

`;
export const UserName = styled.Text`
    color:#fff;
    font-size: 20px;
`;

export const CardFooter = styled.View`
    margin-top: 15px;
    flex-direction: row; /*colocar tods do foother um do lado do outro */
    justify-content: space-between; 
`;
export const Details = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const Value = styled.Text`
    color: #f75175;
    font-size: 14px;
    font-weight: bold;
`; 

export const Divider = styled.View`
    width: 2px;
    height: 13px;
    background: rgba(255, 255, 255, 0.4);
    margin: 0 10px;
`;

export const Date= styled.Text`
    color:#fff;
    margin-left: 5px;
`;


export const Actions = styled.View`
    flex-direction: row; /*pra colocar os icones um do lado do outro */
`;
export const Option = styled.TouchableOpacity`
    margin-left: 14px;
    flex-direction: row; /* colocar os zeros um dula do outro */
`;
export const OptionLabel = styled.Text`
    color:#fff;
    font-size: 14px;
    margin-left: 5px;
`;