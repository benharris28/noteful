import React from 'react'
import { Link } from 'react-router-dom';
import NOTES from './dummy-store';


export default function Folders() {
  return (
    <>
      <p>Choose a folder from the list below.</p>
      <ul className='FolderList'>
        {NOTES.folders.map(folder =>
          <li key={folder.id}>
            <Link to={`/folders/${folder.name}`}>
              {folder.name}
            </Link>
          </li>
        )}
      </ul>
    </>
  )
}