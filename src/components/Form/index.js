import React, { Component } from "react";

import { Container, FormGroup } from "./style";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      inssBase: 0,
      inssDiscount: 0,
      inssDiscountPercent: 0,
      irpfBase: 0,
      irpfDiscount: 0,
      irpfDiscountPercent: 0,
      netSalary: 0,
      netSalaryPercent: 0,
      divStyleInss: {
        backgroundColor: "#d58300",
        width: "0%",
      },
      divStyleIrpf: {
        backgroundColor: "#800",
        width: "0%",
      },
    };
  }

  calculateInssDiscount = (value) => {
    const firstRange = 1045;
    const secondRange = 2089.6;
    const thirdRange = 3134.4;
    const fourthRange = 6101.06;
    const fifthRange = 713.1;
    const maxFirstRange = firstRange * 0.075;
    const maxSecondRange = (secondRange - firstRange) * 0.09;
    const maxThirdRange = (thirdRange - secondRange) * 0.12;

    if (value <= firstRange) {
      return value * 0.075;
    } else if (value >= firstRange && value <= secondRange) {
      const aliquot = (value - firstRange) * 0.09;
      return maxFirstRange + aliquot;
    } else if (value >= secondRange && value <= thirdRange) {
      const aliquot = (value - secondRange) * 0.12;
      return maxFirstRange + maxSecondRange + aliquot;
    } else if (value >= thirdRange && value <= fourthRange) {
      const aliquot = (value - thirdRange) * 0.14;
      return maxFirstRange + maxSecondRange + maxThirdRange + aliquot;
    } else {
      return fifthRange;
    }
  };

  calculateIrpfDiscount = (value) => {
    const firstLimit = 1903.98;
    const secondLimit = 2826.65;
    const thirdLimit = 3751.05;
    const fourthLimit = 4664.68;
    const firstDeduction = 0;
    const secondDeduction = 142.8;
    const thirdDeduction = 354.8;
    const fourthDeduction = 636.13;
    const fifthDeduction = 869.36;

    if (value <= firstLimit) {
      return firstDeduction;
    } else if (value >= firstLimit && value <= secondLimit) {
      const fullDiscount = value * 0.075;
      const discount = fullDiscount - secondDeduction;
      return discount;
    } else if (value >= secondLimit && value <= thirdLimit) {
      const fullDiscount = value * 0.15;
      const discount = fullDiscount - thirdDeduction;
      return discount;
    } else if (value >= thirdLimit && value <= fourthLimit) {
      const fullDiscount = value * 0.225;
      const discount = fullDiscount - fourthDeduction;
      return discount;
    } else if (value >= fourthLimit) {
      const fullDiscount = value * 0.275;
      const discount = fullDiscount - fifthDeduction;
      return discount;
    }
  };

  handleCalculate = (e) => {
    const value = parseFloat(e.target.value);
    if (!value || value === 0) {
      return this.setState({
        inssBase: 0,
        inssDiscount: 0,
        inssDiscountPercent: 0,
        irpfBase: 0,
        irpfDiscount: 0,
        irpfDiscountPercent: 0,
        netSalary: 0,
        netSalaryPercent: 0,
        divStyleInss: {
          backgroundColor: "#d58300",
          width: "0%",
        },
        divStyleIrpf: {
          backgroundColor: "#800",
          width: "0%",
        },
      });
    }

    const inssBase = value;
    const inssDiscount = this.calculateInssDiscount(value);
    const inssDiscountPercent = ((inssDiscount / inssBase) * 100).toFixed(2);
    const irpfBase = value - inssDiscount;
    const irpfDiscount = this.calculateIrpfDiscount(irpfBase);
    const irpfDiscountPercent = ((irpfDiscount / inssBase) * 100).toFixed(2);
    const netSalary = irpfBase - irpfDiscount;
    const netSalaryPercent = ((netSalary / inssBase) * 100).toFixed(2);

    this.setState({
      inssBase,
      inssDiscount,
      inssDiscountPercent,
      irpfBase,
      irpfDiscount,
      irpfDiscountPercent,
      netSalary,
      netSalaryPercent,
      divStyleInss: {
        backgroundColor: "#d58300",
        width: `${inssDiscountPercent}%`,
      },
      divStyleIrpf: {
        backgroundColor: "#800",
        width: `${irpfDiscountPercent}%`,
      },
    });
  };

  formatMonetary = (numb) => {
    const formated = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(numb);
    return formated;
  };

  render() {
    const {
      inssBase,
      inssDiscount,
      inssDiscountPercent,
      irpfBase,
      irpfDiscount,
      irpfDiscountPercent,
      netSalary,
      netSalaryPercent,
      divStyleInss,
      divStyleIrpf,
    } = this.state;

    return (
      <Container>
        <FormGroup>
          <div className="form-salary">
            <label htmlFor="salary">Salario Bruto</label>
            <input
              onChange={this.handleCalculate}
              type="number"
              name="salary"
              placeholder="R$ 7.000,00"
            />
          </div>

          <div className="form-calculations">
            <div>
              <label htmlFor="inss_base">Base INSS:</label>
              <input
                value={this.formatMonetary(inssBase)}
                type="text"
                name="inss_base"
                disabled
              />
            </div>

            <div>
              <label htmlFor="inss_discount">Desconto INSS:</label>
              <input
                className="inss-discount"
                value={`${this.formatMonetary(
                  inssDiscount
                )} (${inssDiscountPercent}%)`}
                type="text"
                name="inss_discount"
                disabled
              />
            </div>

            <div>
              <label htmlFor="irpf_base">Base IRPF:</label>
              <input
                value={this.formatMonetary(irpfBase)}
                type="text"
                name="irpf_base"
                disabled
              />
            </div>

            <div>
              <label htmlFor="irpf_discount">Desconto IRPF:</label>
              <input
                className="irpf-discount"
                value={`${this.formatMonetary(
                  irpfDiscount
                )} (${irpfDiscountPercent}%)`}
                type="text"
                name="irpf_discount"
                disabled
              />
            </div>
          </div>

          <div className="form-net">
            <label htmlFor="net_salary">Salário Líquido:</label>
            <input
              value={`${this.formatMonetary(netSalary)} (${netSalaryPercent}%)`}
              type="text"
              name="net_salary"
              disabled
            />
          </div>
        </FormGroup>
        <div className="range-bar">
          <div style={divStyleInss}></div>
          <div style={divStyleIrpf}></div>
        </div>
      </Container>
    );
  }
}

export default Form;
