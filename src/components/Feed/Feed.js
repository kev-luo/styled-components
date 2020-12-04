import React from "react";
import { Avatar } from "@material-ui/core";
import { HiOutlineUser } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import StyledDiv from "../Styled/StyledDiv";
import StyledPing from "../Styled/StyledPing";
import { LikeBtn, DismissBtn, CommentBtn } from "../Styled/StyledPingIcons";
import LeftTabs from "../Tabs/LeftTabs";
import RightTabs from "../Tabs/RightTabs";

export default function Feed() {
  return (
    <StyledDiv>
      <div>Feed</div>
      <LeftTabs/>
      <RightTabs />
      <StyledPing className="ping">
        <Avatar className="img">
          <HiOutlineUser size={20} />
        </Avatar>
        <h4 className="username">
          @Username<span className="meta"> · 2 hours ago</span>
        </h4>
        <p className="body">
          Yo farmer's market just opened up on west 25th! Come check it out!
        </p>
        <LikeBtn className="like">
          <BiUpvote color="disabled" fontSize="large" />
        </LikeBtn>
        <DismissBtn className="dismiss">
          <BiDownvote color="disabled" fontSize="large" />
        </DismissBtn>
        <CommentBtn className="comment">
          <FaRegComment color="disabled" fontSize="large" />
        </CommentBtn>
        <div className="sxy_line"></div>
      </StyledPing>

      <StyledPing className="ping">
        <Avatar className="img">
          <HiOutlineUser size={20} />
        </Avatar>
        <h4 className="username">
          @Username<span className="meta"> · 2 hours ago</span>
        </h4>
        <p className="body">
          Yo farmer's market just opened up on west 25th! Come check it out!
        </p>
        <LikeBtn className="like">
          <BiUpvote color="disabled" fontSize="large" />
        </LikeBtn>
        <DismissBtn className="dismiss">
          <BiDownvote color="disabled" fontSize="large" />
        </DismissBtn>
        <CommentBtn className="comment">
          <FaRegComment color="disabled" fontSize="large" />
        </CommentBtn>
        <div className="sxy_line"></div>
      </StyledPing>

      <StyledPing className="ping">
        <Avatar className="img">
          <HiOutlineUser size={20} />
        </Avatar>
        <h4 className="username">
          @Username<span className="meta"> · 2 hours ago</span>
        </h4>
        <p className="body">
          Yo farmer's market just opened up on west 25th! Come check it out!
        </p>
        <LikeBtn className="like">
          <BiUpvote color="disabled" fontSize="large"/>
        </LikeBtn>
        <DismissBtn className="dismiss" >
          <BiDownvote color="disabled" fontSize="large"/>
        </DismissBtn>
        <CommentBtn className="comment" >
          <FaRegComment color="disabled" fontSize="large"/>
        </CommentBtn>
        <div className="sxy_line"></div>
      </StyledPing>
      <StyledPing className="ping">
        <Avatar className="img">
          <HiOutlineUser size={20} />
        </Avatar>
        <h4 className="username">
          @Username<span className="meta"> · 2 hours ago</span>
        </h4>
        <p className="body">
          Yo farmer's market just opened up on west 25th! Come check it out!
        </p>
        <LikeBtn className="like">
          <BiUpvote color="disabled" fontSize="large"/>
        </LikeBtn>
        <DismissBtn className="dismiss" >
          <BiDownvote color="disabled" fontSize="large"/>
        </DismissBtn>
        <CommentBtn className="comment" >
          <FaRegComment color="disabled" fontSize="large"/>
        </CommentBtn>
        <div className="sxy_line"></div>
      </StyledPing>
      <StyledPing className="ping">
        <Avatar className="img">
          <HiOutlineUser size={20} />
        </Avatar>
        <h4 className="username">
          @Username<span className="meta"> · 2 hours ago</span>
        </h4>
        <p className="body">
          Yo farmer's market just opened up on west 25th! Come check it out!
        </p>
        <LikeBtn className="like">
          <BiUpvote color="disabled" fontSize="large"/>
        </LikeBtn>
        <DismissBtn className="dismiss" >
          <BiDownvote color="disabled" fontSize="large"/>
        </DismissBtn>
        <CommentBtn className="comment" >
          <FaRegComment color="disabled" fontSize="large"/>
        </CommentBtn>
        <div className="sxy_line"></div>
      </StyledPing>
      <StyledPing className="ping">
        <Avatar className="img">
          <HiOutlineUser size={20} />
        </Avatar>
        <h4 className="username">
          @Username<span className="meta"> · 2 hours ago</span>
        </h4>
        <p className="body">
          Yo farmer's market just opened up on west 25th! Come check it out!
        </p>
        <LikeBtn className="like">
          <BiUpvote color="disabled" fontSize="large"/>
        </LikeBtn>
        <DismissBtn className="dismiss" >
          <BiDownvote color="disabled" fontSize="large"/>
        </DismissBtn>
        <CommentBtn className="comment" >
          <FaRegComment color="disabled" fontSize="large"/>
        </CommentBtn>
        <div className="sxy_line"></div>
      </StyledPing>
    </StyledDiv>
  );
}
