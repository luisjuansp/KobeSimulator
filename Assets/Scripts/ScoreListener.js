#pragma strict
import UnityEngine.UI;

private var score : int;
var scoreText : Text;
var character : GameObject;

function Start () {
	score = 0;
}

function Update () {
	scoreText.text = "Score: " + score;
}

function OnTriggerEnter(col: Collider){
	if (col.gameObject.name == "Ball"){
		GetComponent.<AudioSource>().Play();
		score++;
		//character.GetComponent.<CharacterPlacement>().placeCharacter();
	}
}