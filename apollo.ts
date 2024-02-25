import { ApolloClient, InMemoryCache } from "@apollo/client";

// ApolloClient를 만들고 React Native와 연결하기

// http://localhost:4000/graphql
const client = new ApolloClient({
  uri: "https://big-foxes-follow.loca.lt/graphql",
  cache: new InMemoryCache(),
});

// 앱을 컴퓨터에서 사용한다면 localhost가 먹히지만
// 앱을 핸드폰에서 사용한다면 얘기가 달라진다, 핸드폰에는 locahost가 없기 떄문

// uri에 IP주소를 공유하는 방법
//1. windows나 mac os에 들어가서 명령어를 쳐서 컴퓨터 공인 IP얻기
// 2. 서비스 이용하기 => ngrok, localtunnel
// ngrok : 공짜, 다운 받은 뒤 다운 받은 곳 콘솔에 ./ngrok http 4000(백엔드가 작동중인 포트) 입력하기
// localtunnel

export default client;
