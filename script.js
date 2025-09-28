const calculate = () => {
  let a = parseFloat(document.getElementById("a").value) || 0;
  let b = parseFloat(document.getElementById("b").value) || 0;

  let expansion = `(${a}a)<sup>2</sup> + (${b}b)<sup>2</sup> + 2(${a}a)(${b}b)`;
  let simplified = `${a * a}a + ${b * b}b + ${2 * a * b}ab`;
  let total = a * a + b * b + 2 * a * b;

  document.getElementById("result").innerHTML = `
    <p><b>Expansion:</b> (${a}a+${b}b)<sup>2</sup> <br>  => ${expansion} <br> => ${simplified}</p>
    <p><b>Total:</b> ${total}</p>
  `;
};
