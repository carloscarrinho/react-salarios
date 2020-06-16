import styled from "styled-components";

export const Container = styled.main`
  width: 70%;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  flex-direction: column;

  .range-bar {
    margin-top: 80px;
    background-color: #1B998B;
    height: 25px;
    width: 100%;
    border-radius: 3px;
    display: flex;
    align-items: center;

    div {
      height: 100%;
    }
  }
`;

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    padding: 10px 15px;
    margin: 10px;
    border: 1px solid #bbb;
    border-radius: 3px;
    
    &:focus {
      border: 1px solid #1B998B;
    }
  }

  .form-salary {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 15px;

    label {
      width: 100%;
      padding: 5px;
      font-weight: bold;
    }

    input {
      width: 100%;
      margin: 10px 5px;
    }
  }

  .form-calculations {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 15px;
    border-bottom: 1px solid #ccc;

    div {
      display: flex;
      flex-wrap: wrap;
      width: 22%;
      
      label {
        width: 100%;
        padding: 5px;
        font-weight: bold;
      }
      input {
        width: 100%;
        margin: 10px 5px;
        font-weight: bold;
      }

      .inss-discount {
        color: #d58300;
      }

      .irpf-discount {
        color: #800;
      }
    }
  }

  .form-net {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    
    label {
      width: 100%;
      padding: 5px;
      font-weight: bold;
    }
    
    input {
      width: 21%;
      margin: 10px 5px;
      font-weight: bold;
      color: #1B998B;
    }
  }
}

`;
