#pragma strict

var Ball : GameObject;
private var bounces : int;

function Start () {
	bounces = 3;
}

function Update () {
	if (bounces <= 0){
		Destroy(gameObject);
	}
}

function OnCollisionEnter(col : Collision){
	if (col.gameObject.name == "Floor"){
		bounces--;
		GetComponent.<AudioSource>().Play();
	}
}

function OnDestroy() {
	Ball.SetActive(true);
}