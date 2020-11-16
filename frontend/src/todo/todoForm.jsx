import React from 'react'

import Grid from '../template/crid'
import IconButton from '../template/iconButton'

export default props => (
    <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            <input id='description' className='form-control' placeholder='Adicione uma tarefa'></input>                
        </Grid>

        <Grid cols='12 3 2'>
            <IconButton style='success' icon='plus'></IconButton>
        </Grid>
    </div>
)