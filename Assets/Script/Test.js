#pragma strict

import UnityEngine.UI;
	var score:int=0;
	var scoretext:Text;
	var audioClips:AudioClip[];
	
function Start () 
{ 

 	transform.position.x=0;
 	transform.position.y=-8.6;
 	scoretext=GameObject.Find("score1").GetComponent(Text);
 	
}

function Update () 
{

	var speeed:float=0.5f;

// transform.position.x+=0.01;
// transform.position.y+=0.01;

	//if(Input.GetKey(KeyCode.UpArrow)){
		//if(transform.position.y<8.6)
		//transform.position.y+=speeed;
	//}
	//if(Input.GetKey(KeyCode.DownArrow)){
		//if(transform.position.y>-8.6)
		//transform.position.y-=speeed;
	//}
 	if(Input.GetKey(KeyCode.RightArrow)){
 		if(transform.position.x<19.0)
 		transform.position.x+=speeed;
 		transform.localScale.x=1;
 	}
 	if(Input.GetKey(KeyCode.LeftArrow)){
 		if(transform.position.x>-19.0)
 		transform.position.x-=speeed;
 		transform.localScale.x=-1;
 	}
 	rigidbody2D.velocity=new Vector2(0,0);
 	//= rigidbody2D.velocity=Vector2.zero;
}
function OnTriggerEnter2D(coll:Collider2D){
   	if(coll.name=="ET"){
		
		score++;
		coll.SendMessage("Die");
		audio.pitch=1;
		audio.clip=audioClips[0];
		
		//GameObject.Find("Score").guiText.text="Score: "+score;  		    		
   		//Destroy(coll.gameObject);
   	}
   	else if(coll.name=="Bad ET"){
		
		score-=3;
		coll.SendMessage("Die");
		audio.pitch=1;
		audio.clip=audioClips[1];
		 
		//GameObject.Find("Score").guiText.text="Score: "+score; 		
   		//Destroy(coll.gameObject);
   	}
   	else if(coll.name=="ET 1"){
		
		score+=2;
		coll.SendMessage("Die");
		audio.pitch=0.5;
		audio.clip=audioClips[0];
		 
		//GameObject.Find("Score").guiText.text="Score: "+score; 		
   		//Destroy(coll.gameObject);
   	}
   	audio.Play();
   	scoretext.text=score.ToString();
}
