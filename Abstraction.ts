// // oop=>abstraction
// // idea
// // implements after
 

// interface MediaPlayer{
//     play():void;
//     pause():void;
//     stop():void;
// }

// class MusicPlayer implements MediaPlayer{
//     play(){
//         console.log('playing music');
//     }
//     pause(){
//         console.log('Music pause..')
        
//     }
//     stop(){
//         console.log('stop music..');
//     }

// }

// const NapaPlayer=new MusicPlayer();
// NapaPlayer.play();

abstract class MediaPlayer{
   abstract play():void;
   abstract pause():void;
   abstract stop():void;
}
class NapaPlayer extends MediaPlayer{
    play(): void {
        console.log('Music are playing...');
    }
    pause(): void {
        console.log('Music are pause');

    }
   stop(): void {
       console.log('music stop');
   }

}

const NapaPlayer1=new NapaPlayer();

NapaPlayer1.play();
// const NapaPlayer=new MediaPlayer();
