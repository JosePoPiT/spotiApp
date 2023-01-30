import { Injectable, EventEmitter } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>()
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)
  public audio!: HTMLAudioElement //TODO <audio>
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00')
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00')
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused')
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0)
  // myObservable1$: Observable<any> = new Observable()

  constructor() {
    this.audio = new Audio();
    this.trackInfo$.subscribe(responseOk => {
      if (responseOk) {
        console.log('🆗🆗🆗', responseOk);
        this.setAudio(responseOk)
      }
      
    });
    
    this.listenAllEvents();
    // this.myObservable1$ = new Observable(
    // (observer: Observer<any>) => {
    //   observer.next('🆗🆗😝😝😨')
    // }
    // )
  }

  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate',this.calculateTime ,false)
    this.audio.addEventListener('playing',this.setPlayerStatus ,false)
    this.audio.addEventListener('play',this.setPlayerStatus ,false)
    this.audio.addEventListener('pause',this.setPlayerStatus ,false)
    this.audio.addEventListener('ended',this.setPlayerStatus ,false)
  }

  private setPlayerStatus = (state: any) => {
    switch (state.type) { //TODO: playing
      case 'play':
        this.playerStatus$.next('play')
        break;
        case 'playing':
        this.playerStatus$.next('playing')
        break;
        case 'ended':
        this.playerStatus$.next('ended')
        break;
    
      default:
        this.playerStatus$.next('paused')
        break;
    }
    console.log('❤️❤️', state);
    
  }

  private setPercentage(currentTime: number, duration: number): void {
    //TODO duration ----> 100%
    //TODO currentime ---->
    //TODO (currentme * 100) / 100
    let percentage = (currentTime * 100) / duration;
    this.playerPercentage$.next(percentage);

  }
  private calculateTime = () => {
    const {currentTime, duration} = this.audio;
    this.setTimeElapsed(currentTime);
    this.setTimeRemaining(currentTime, duration)
    this.setPercentage(currentTime, duration)
  }

  private setTimeElapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60) //TODO esto se hace para que me de un numero entero 1,2,3,4,5,6
    let minutes = Math.floor((currentTime / 60) % 60);

    //TODO: Funciones publicas  
    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds 
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes
    const displayFormat = `${displayMinutes}:${displaySeconds}`
    this.timeElapsed$.next(displayFormat);
  }

  private setTimeRemaining(currentTime: number, duration: number): void {
    let timeLeft = duration - currentTime;

    let seconds = Math.floor(timeLeft % 60) //TODO esto se hace para que me de un numero entero 1,2,3,4,5,6
    let minutes = Math.floor((timeLeft / 60) % 60);

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds 
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes
    const displayFormat = `-${displayMinutes}:${displaySeconds}`
    this.timeRemaining$.next(displayFormat);
  }

  // TODO todas las funciones publicas
  public setAudio(track: TrackModel):void {
    console.log('🎶🎶🎶', track);
    this.audio.src = track.url;
    this.audio.play();
    

  }

  public togglePlayer(): void {
    (this.audio.paused) ? this.audio.play() : this.audio.pause()
  }

  public seekAudio(percentage: number): void {
    const { duration } = this.audio;
    console.log(`Duration: ${duration}, Percentage: ${percentage}`);
    const percentageToSecond = (percentage * duration) / 100;
    console.log(percentageToSecond);
    this.audio.currentTime = percentageToSecond;
    
    

  }
}
