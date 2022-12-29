
const formElements = document.getElementById('form-elements');
const salaryInput = document.getElementById('gross-income');
const salaryBtn = document.getElementById('salaryBtn');
const nssfOutput = document.getElementById('nssf');
const taxableIncomeOutput = document.getElementById('taxableIncome');
const payeeOutput = document.getElementById('payee');
const nhifOutput = document.getElementById('nhif');
const netSalaryOutput = document.getElementById('netSalary');

const backBtn = document.getElementById('backBtn');
  backBtn.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5501/homepage.html';
  });
  


function netSalaryCalculator (){
    // listing NHIF contribution
const nhifDeductions = function (grossSalary) {
    let deduction;
    if (grossSalary > 1000 && grossSalary <= 6000) {
      deduction = 150;
    } else if (grossSalary >= 6000 && grossSalary < 8000) {
      deduction = 300;
    } else if (grossSalary >= 8000 && grossSalary < 12000) {
      deduction = 400;
    } else if (grossSalary >= 12000 && grossSalary < 15000) {
      deduction = 500;
    } else if (grossSalary >= 15000 && grossSalary < 20000) {
      deduction = 600;
    } else if (grossSalary >= 20000 && grossSalary < 25000) {
      deduction = 750;
    } else if (grossSalary >= 25000 && grossSalary < 30000) {
      deduction = 850;
    } else if (grossSalary >= 30000 && grossSalary < 35000) {
      deduction = 900;
    } else if (grossSalary >= 35000 && grossSalary < 40000) {
      deduction = 950;
    } else if (grossSalary >= 40000 && grossSalary < 45000) {
      deduction = 1000;
    } else if (grossSalary >= 45000 && grossSalary < 50000) {
      deduction = 1100;
    } else if (grossSalary >= 50000 && grossSalary < 60000) {
      deduction = 1200;
    } else if (grossSalary >= 60000 && grossSalary < 70000) {
      deduction = 1300;
    } else if (grossSalary >= 70000 && grossSalary < 80000) {
      deduction = 1400;
    } else if (grossSalary >= 80000 && grossSalary < 90000) {
      deduction = 1500;
    } else if (grossSalary >= 90000 && grossSalary < 100000) {
      deduction = 1600;
    } else if (grossSalary >= 100000) {
      deduction = 1700;
    } else {
      deduction = 0;
    }
    nhifOutput.innerHTML = `NHIF: ${deduction}`;
    return deduction;
  };

  // KRA
  const grossIncome = salaryInput.value;
  let kra;

  if (grossIncome <= 24000){
    kra = (grossIncome * 0.1);
    payeeOutput.innerHTML = ` Payee: Ksh ${kra}`
  }else if (grossIncome > 24000 && grossIncome <= 32333){
     kra = (grossIncome - 24000 ) * 0.25
    payeeOutput.innerHTML = ` Payee: Ksh ${kra}`
  }else {
    kra = (grossIncome - 32333 ) * 0.35 | 0; //To remove the decimal part
    payeeOutput.innerHTML = ` Payee: Ksh ${kra}`
  }


  //NSSF Contribution
  let nssf;
 if (grossIncome > 0 && grossIncome <= 3000){
    nssf = (grossIncome * 0.06)
    nssfOutput.innerHTML = `NSSF: Ksh. ${nssf}`
 }else if (grossIncome <= 4500){
    nssf = 270;
    nssfOutput.innerHTML = ` NSSF: Ksh. ${nssf}`;
 } else if (grossIncome > 4500 && grossIncome <= 18000) {
    nssf = grossIncome * 0.06;
    nssfOutput.innerHTML = `NSSF: Ksh. ${nssf}`;
  } else if (grossIncome > 18000) {
    nssf = 1080;
    nssfOutput.innerHTML = `NSSF: Ksh. ${nssf}`;
  }

 // Taxable income 
 taxableIncomeOutput.innerHTML = `Taxable income: Ksh. ${grossIncome - nssf}`;


   // Calculate net salary
   const deduction = nhifDeductions(grossIncome);
   const netSalary = grossIncome - kra - deduction - nssf;
   netSalaryOutput.innerHTML = ` Net Salary: Ksh ${netSalary}`;
 } salaryBtn.addEventListener('click', netSalaryCalculator);

