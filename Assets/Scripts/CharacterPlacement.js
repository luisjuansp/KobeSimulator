#pragma strict

function Start () {
	placeCharacter();
}

function Update () {

}

function placeCharacter(){
	transform.position.x = Random.Range(-9,9);
	transform.position.z = Random.Range(-9,9);
}