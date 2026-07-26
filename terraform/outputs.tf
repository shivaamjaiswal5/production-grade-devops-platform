output "bucket_name" {
  description = "S3 Bucket Name"
  value       = aws_s3_bucket.project_bucket.bucket
}

output "bucket_arn" {
  description = "S3 Bucket ARN"
  value       = aws_s3_bucket.project_bucket.arn
}

output "bucket_region" {
  description = "AWS Region"
  value       = var.aws_region
}