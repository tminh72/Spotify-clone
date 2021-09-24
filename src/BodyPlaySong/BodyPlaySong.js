import React from 'react'
import './BodyPlaySong.css'
import FowardIcon from '../Component/FowardIcon/FowardIcon'
import Account from '../Component/Account/Account'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import HoldSong from '../Component/HoldSong/HoldSong'
import data from '../Component/Footer/music-list2'
import IconPlay from '../Component/IconPlay/IconPlay';

export default function BodyPlaySong() {
   
    const playListID = "7WZujZ2eNEaTLRMspOZbjA";

    const listPlay = data.find(list=>list.idd===playListID)
    return (
        <div className='body'>
            <div className='playsong-top'>
                <div className='body-bar'>
                        <FowardIcon/>
                        <div>
                            <Account/>
                        </div>
                </div>

                <div>
                    <h>Justin Bieber</h>
                </div>
            </div>
            
            <div className = 'playsong-body'>
                <div className = 'playsong-body__button'>
                    
                    <IconPlay playListID={playListID}/>
                    <div className='playsong-body__text'>
                        <p>THEO DÕI</p>
                    </div>
                    <MoreHorizIcon style={{ color: 'white',fontSize: 30 }}/>
                </div>

                <div className = 'playsong-body__content'>
                    <h>Phổ biến</h>
                    <div>
                        
                        {   
                            listPlay.songList.map((song,i) =>{
                                
                                return <HoldSong song = {song} index={i+1} playListID={playListID}/>
                            })
                        }
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}



