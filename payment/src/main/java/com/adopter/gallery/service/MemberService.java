package com.adopter.gallery.service;

import com.adopter.gallery.model.Member;
import com.adopter.gallery.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    public void addMember(Member member) {
        member.setRole("user");
        memberRepository.save(member);
    }

    public Member selectMember(Member member) {
        return memberRepository.findByEmailAndPassword(member.getEmail(), member.getPassword());
    }

    public List<Member> artistlist() {
        String role = "artist";
        return memberRepository.findByRole(role);
//        return memberRepository.findAll();
    }

}
