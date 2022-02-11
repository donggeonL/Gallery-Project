package com.adopter.gallery.model;


import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Entity
@Table(name = "product")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "info")
	private String info;
	
	@Column(name = "size_width")
	private String size_width;
	
	@Column(name = "size_hight")
	private String size_hight;
	
	@Column(name = "product_type")
	private String product_type;
	
	@Column(name = "product_status")
	private String product_status;

	@Column(name = "price")
	private Integer price;

	@Column(name = "createtime")
	private Date createtime;

	@Column(name = "updatetime")
	private Date updatetime;

	@JsonIgnore
	@Transient
	private MultipartFile file;

	@Column(name = "file")
	private String fileinfo;

}