#pragma strict

  
import UnityEngine.UI;
  
var timeLeft:float=30f;
var timetext:Text;
var timeOut:boolean=false;

function Start () {
	timetext=GetComponent(Text);
}  
function Update () {
	if(timeOut==false&&timeLeft<0){
	//if(timeLeft<0){
	//Debug.Log("Time Out!");
	GameObject.Find("spawner").GetComponent(spawner).stop=true; 	
	
	timeOut=true;
	
	var score: int =parseInt(GameObject.Find("score1").GetComponent(Text).text);
	PlayerPrefs.SetInt("score",score);
	Application.LoadLevel(2);
	
	}
	
	else if(timeLeft>0){
    timeLeft -= Time.deltaTime;
    timetext.text=Mathf.RoundToInt(timeLeft).ToString();
 	//guiText.text="Time\n"+Mathf.RoundToInt(timeLeft).ToString();
 	}
}