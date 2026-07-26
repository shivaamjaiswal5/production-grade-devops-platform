provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "production-grade-devops-platform"
      Environment = var.environment
      ManagedBy   = "Terraform"
    }
  }
}