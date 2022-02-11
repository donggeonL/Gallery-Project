package com.adopter.gallery.model;


import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
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
	@NotNull
	private String name;
	
	@Column(name = "info")
	@NotNull
	private String info;
	
	@Column(name = "size_width")
	@NotNull
	private String size_width;
	
	@Column(name = "size_hight")
	@NotNull
	private String size_hight;
	
	@Column(name = "product_type")
	@NotNull
	private String product_type;
	
	@Column(name = "product_status")
	@NotNull
	private String product_status;

	@Column(name = "price")
	@NotNull
	private Integer price;

	@Column(name = "createtime")
	@NotNull
	private Date createtime;

	@Column(name = "updatetime")
	@NotNull
	private Date updatetime;

	@JsonIgnore
	@Transient
	private MultipartFile file;

	@Column(name = "file")
	@NotNull
	private String fileinfo;

}