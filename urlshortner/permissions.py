from rest_framework import permissions


class UpdateOwnsUrls(permissions.BasePermission):
    '''allows users to only edit their oen notes'''

    def has_object_permission(self, request, view , obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.id == request.user.id
