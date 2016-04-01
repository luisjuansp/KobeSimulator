#pragma strict
import UnityEngine.UI;

var Ball : GameObject;
private var speed : float;
var ForceMeter : Image;

function Start () {
	speed = 5;
}

function Update () {
	var clone : GameObject;
	if (Input.GetButtonDown("Fire1")) {
		speed = 5;
	}
	if (Input.GetButton("Fire1")) {
		if(speed < 10){
			speed += 0.1;
		}
	}
	if (Input.GetButtonUp("Fire1")) {
		clone = Instantiate(Ball, transform.position, transform.rotation);
		clone.GetComponent.<Rigidbody>().velocity = transform.TransformDirection ((Vector3.forward + Vector3.up) * speed);
		clone.GetComponent.<BallListener>().Ball = this.gameObject;
		clone.gameObject.name = "Ball";
		Destroy(clone,5);
		speed = 5;
		gameObject.SetActive(false);
	}
	ForceMeter.fillAmount = (speed - 5) / 5;
}