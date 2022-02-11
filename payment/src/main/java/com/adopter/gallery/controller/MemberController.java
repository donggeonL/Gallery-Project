package com.adopter.gallery.controller;

import com.adopter.gallery.model.Member;
import com.adopter.gallery.repository.MemberRepository;
import com.adopter.gallery.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
public class MemberController {

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    MemberService memberService;

    @GetMapping("/artistlist")
    public List<Member> artistlist(){
        return memberService.artistlist();
    }


    @GetMapping("/login-detail")
    public Map<String, Object> login(
            String email, String password,
            @ModelAttribute Member member){
        System.out.println(email);
        System.out.println(password);

        Member member2 = memberService.selectMember(member);

        Map<String, Object> result = new HashMap<>();
        if(member2 != null) {
            result.put("msg", "로그인 성공");
            result.put("code", 200);
        } else {
            result.put("msg", "로그인 실패");
            result.put("code", 201);
        }

        return result;
    }

    @GetMapping("/signup")
    public Map<String, Object> signup(
            Long id, String name, String email, String password, String country, String p_number,
            @ModelAttribute Member member){

        Map<String, Object> result = new HashMap<>();
        result.put("msg", "회원가입 완료!");

        memberService.addMember( member );

        return result;
    }

}
