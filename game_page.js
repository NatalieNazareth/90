player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

function send()
{
      get_number1 = document.getElementById("number1").value;
      get_number2 = document.getElementById("number2").value;
      question_number = "<h4>" + get_number1 + " X " + get_number2 + "</h4>";
      input_box = "<br>Anwer: <input type='number' id='input_check_box'>";
      check_button = "<br><br><button class='btn btn-primary' onclick='check()'>Check</button>";
      row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}