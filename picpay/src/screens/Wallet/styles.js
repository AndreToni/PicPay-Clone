import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper= styled.View`
    background:#000;
    flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled(LinearGradient)`
    height: 250px;
`;

export const HeaderContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    margin-top:40px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;

`;

export const Balance = styled.View`
    margin: 10px 0;
    align-items: center;
    flex-direction: row;

`;
export const Value = styled.Text`
    color: #fff;
    font-size: 38px;
    font-weight: 200;
`;
export const Bold = styled.Text`
    font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
    margin-left: 15px;
    margin-right: 15px;
`;

export const Info = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: 200;
`;

export const Actions = styled.View`
    margin: 40px 0;
    
    flex-direction: row;
`;

export const Action = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content:center;
    margin: 0 10px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    width: 150px;
    height: 45px;
    border-radius:25px;
`;

export const ActionLabel = styled.Text`
    margin-left: 10px;
    color: #fff;
    font-size: 12px;
    
`;

export const UseBalance = styled.View`
    background: #1C1C1E;
    height: 60px;
    padding: 0 16px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

`;

export const UseBalanceTitle = styled.Text`
    margin-left: 10px;
    color: #fff;
    font-size: 16px;
    font-weight:500;
`; 

export const PaymentMethods = styled.View`
    margin-top: 10px;
    padding: 0 16px;
`; 
export const PaymentMethodsTitle = styled.Text`
    margin-left: 10px;
    color: #8E8E93;
    font-size: 16px;
    font-weight:bold;
    text-transform: uppercase;

`; 

export const Card = styled.View`
    margin-top: 10px;
    background: #1E232A;
    padding: 20px;
    border-radius: 8px;
    
`;

export const CardBody = styled.View`
    flex-direction: row;
`;

export const CardDetails = styled.View`
    flex: 1;
    margin-right: 20px;
`;
export const CardTiltle = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: 500;
`;
export const CardInfo = styled.Text`
    margin-top:15px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    font-weight: 200;
`;

export const Img = styled.Image`
    width: 60px;
`;

export const AddButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
`;
export const AddLabel = styled.Text`
    margin-left: 15px;
    color: #0DB060;
    font-size: 18px;
    font-weight: bold;
`;

export const UseTicketContainer= styled.View`
    align-items: center;
    margin-top: 25px;
`;
export const UseTicketButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`;

export const UseTicketLabel = styled.Text`
    margin-left: 15px;
    color: #0DB060;
    font-size: 16px;
    font-weight: bold;
    text-decoration-line: underline;

`;