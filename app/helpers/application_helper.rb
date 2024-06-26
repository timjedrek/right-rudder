module ApplicationHelper

  # Title Changer
  def title(text)
    content_for :title, text
  end

  # Meta Description Changer
  def meta_description(text)
    content_for :meta_description, text
  end

  # Meta Keywords Changer
  def meta_keywords(text)
    content_for :meta_keywords, text
  end

  # OG Image
  def og_image(image_name)
    content_for :og_image, image_name
  end

  # Twitter Image
  def twitter_image(image_name)
    content_for :twitter_image, image_name
  end

  def customer_portal_path?
    request.path.include?('/customer-portal')
  end

  def render_authenticated_user_navigation
    if user_signed_in?
      if customer_portal_path?
        render "shared/customer_portal_sidebar"
      else
        render "shared/user_menu"
      end
    end
  end
end
