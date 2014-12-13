#pragma strict

var anim : Animator;
var box : BoxCollider2D;
function Start() {
	//var y=[-9, -10, -11];
	anim=GetComponent(Animator);
	box=GetComponent(BoxCollider2D);
	rigidbody2D.velocity=new Vector2(0,Random.Range(-9, -11));
	
}

function Die() {
	box.enabled=false;
	anim.SetTrigger("die");
}
function Kill(){
	Destroy(gameObject);
}
function OnTriggerEnter2D(other:Collider2D){
	if(other.tag=="wall"){
	Destroy(gameObject);
	}
}
