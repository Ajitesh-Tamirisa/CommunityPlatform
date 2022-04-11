import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
// import {Link} from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';

export default function QuestionCard({author, timestamp, title, body, image, link, branchId, postId, forums, width}) {

  const w = width ? width:{xs:'95%', sm:'67%'}

  const style = {
    width: w,
    m: 1.5
  }
  return (
    <Card sx={style}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={author}
        subheader={timestamp}
      />
      
      <CardContent>
        <Typography sx={{pl:2.5, pr:2.5}} variant="h5" align="justify">
          {title}
        </Typography>
      </CardContent>
      <CardContent>
        
      <Typography sx={{pl:2.5, pr:2.5}} variant="body2" color="text.secondary" align="justify">
          {body}
      </Typography>
      {forums ?
        <Link sx={{pl:2.5, pr:2.5}} href={"/DiscussionForums/"+branchId+"/"+postId} underline="none">
          <Stack direction="row" alignItems="center" justifyContent="center">
            <CommentIcon/>
            <Typography sx={{pl:0.5, pr:0.5, fontWeight:500}}>
              View Replies
            </Typography>
          </Stack>
        </Link>:<span></span>}
      {link?<div style={{textAlign:'center'}}>
              {/* <br/> */}
              <Link sx={{pl:2.5, pr:2.5, textAlign:'center'}} href="#" underline="hover">
                {link}
              </Link>
          </div>: <span></span>}
      </CardContent>
      {image ?  <CardContent>
        <CardMedia
          component="img"
          height="350"
          image={image}
          alt="Related image"
          sx={{objectFit: 'contain'}}
        />
      </CardContent>: <span></span>}
    </Card>
  );
}
