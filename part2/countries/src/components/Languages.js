import React from 'react'

function Languages({languages}) {
    return (
        <div>
            <h3>Languages</h3>
            <ul>
                {languages.map(
                    language => 
                    <li key = {language.iso639_2}>
                        {language.name}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Languages
