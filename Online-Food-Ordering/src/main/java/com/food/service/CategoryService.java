package com.food.service;

import com.food.model.Category;

import java.util.List;

public interface CategoryService {

    public Category createCategory(String name,Long userId) throws Exception;

    public List<Category> findCategoryByResId(Long resId)throws Exception;

    public Category findCategoryById(Long catId)throws Exception;
}
