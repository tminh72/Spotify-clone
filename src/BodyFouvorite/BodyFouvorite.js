import React from 'react'
import FowardIcon from '../Component/FowardIcon/FowardIcon'
import Account from '../Component/Account/Account'
import './BodyFouvorite.css'
import { IconContext } from "react-icons";
import {BsHeart,
        BsClock} from "react-icons/bs";
import HoldSong from '../Component/HoldSong/HoldSong';
import IconPlay from '../Component/IconPlay/IconPlay';
import { useState , useEffect } from 'react';
import { useSelector } from 'react-redux';


export default function BodyFouvorite() {
    const token = useSelector(state => state.playLists).token
    const [listPlay,setListPlay] = useState(null)
    const getFavoriteList = (playlist) =>{
        let i;
        for(i = 0 ; i <= playlist.length - 1 ; i++){
           if(playlist[i].playlist_name == 'Liked Song') {
                return playlist[i]
           }
                
                
        }
    }

    useEffect(() => {
        fetch('http://localhost:8080/api/playlist/',{
            headers:{
                'Authorization':token
            }
        })
            .then(respone => respone.json())
            .then(data => {
                setListPlay(getFavoriteList(data))
                
            })
    },[])
    return listPlay?(
        <div className = 'body'>

            <div className='header header-favourite-song'>
                <div className = 'body-bar'>
                    <FowardIcon/>
                    <Account/>
                </div>

                <div className='header--info'>
                    <div className='header--img img__gradient'>
                        <IconContext.Provider value={{ className: "react-heart-icons" }}>
                            <BsHeart/>
                        </IconContext.Provider>
                    </div>

                    <div className='header--content'>
                        <div className='signal'>Playlist</div>
                        <div className='title'>Liked songs</div>
                        <div className='username'>Tuấn Minh</div>
                    </div>
                </div>
            </div>

            <div className="body__favlist">
                <div className="body__favlist--content ">
                   
                    <IconPlay playListID={listPlay.playlist_id}/>
                    
                </div>

                {/* Songs are liked */}
                <div className="sonngs">
                    <div className="songs__title">
                        <div>#</div>
                        <div className="order">Title</div>
                        <div className="album">Album</div>
                        <div className="view">Views</div>
                        <div className="time"><BsClock/></div>
                    </div>
                    <div>
                        {   
                            sort_by_key(listPlay.listSongs,"song_id").map((song,i) =>{
                                
                                return <HoldSong song = {song} index={i+1} playListID={listPlay.playlist_id} />
                            })
                        }
                    </div>

                    
                    
                </div>

            </div>
                
        </div>
    ):""
}

function sort_by_key(array, key)
{
 return array.sort(function(a, b)
 {
  var x = a[key]; var y = b[key];
  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
 });
}
