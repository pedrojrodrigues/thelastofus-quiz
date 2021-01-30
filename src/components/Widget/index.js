import styled from 'styled-components'

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid #7690A5;
  background-color: #162029;
  border-radius: 1px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: #000;

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    margin-top: 20px;
  }
  input {
    display: block;
    width: 100%;
    padding: 7px;
    margin: 25px 0 25px 0;
    border: 1px solid #7690A5;
    background: #162029;
    color: #fff;
  }
  button {
    display: block;
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 1px;
    background: #7690A5;
    color: #fff;
  }
  li {
    margin-bottom: 8px;
    padding: 5px 15px 5px 15px;
    background: #394E5B;
    border-radius: 1px;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
  }
`;

export default Widget;